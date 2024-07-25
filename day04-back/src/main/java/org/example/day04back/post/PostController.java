package org.example.day04back.post;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/post")
@RequiredArgsConstructor
public class PostController {
    private final PostService postService;

    @RequestMapping(method = RequestMethod.POST, value = "/create")
    public void create(String title) {
        postService.save(title);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/read")
    public List<PostReadResponse> read(String word) {
        return postService.read(word);
    }
}
